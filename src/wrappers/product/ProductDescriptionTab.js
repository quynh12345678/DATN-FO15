import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { StarIcons } from "../../components/common/star";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import { Form, Input, Pagination, message } from "antd";
import { buildImage, getItem, onFieldsChange, validateMessages } from "../../services";
import TextArea from "antd/es/input/TextArea";
import { toggleShowLoading } from "../../redux/actions/common";
import { RATING_SERVICE } from "../../services/shop/rating-service";
import ReactHtmlParser from 'react-html-parser';

const ProductDescriptionTab = (props) => {
	const [form] = useForm();
	const [ratingNumber, setRatingNumber] = useState(0);
	useEffect(() => {
		form.setFieldsValue({
			number: 0,
			content: null
		})
	}, []);

	useEffect(() => {
		form.setFieldValue('r_number', ratingNumber);
	}, [ratingNumber]);

	const dispatch = useDispatch();

	const submitForm = async (e) => {
		try {
			dispatch(toggleShowLoading(true));
			const response = await RATING_SERVICE.create({
				r_content: form.getFieldValue('r_content'),
				r_number: ratingNumber,
				r_product_id: props.productFullDesc.id
			});

			if (response?.status === 'success') {
				form.resetFields();
				setRatingNumber(0);
				props.getDataRatings({ page: 0, pageSize: 5, product_id: props.productFullDesc.id });
				window.location.reload();
				message.success('Đánh giá sản phẩm thành công');
			} else
				message.error('Đánh giá sản phẩm không thành công!');
			dispatch(toggleShowLoading(false));
		} catch (error) {
			message.error('Đánh giá sản phẩm không thành công!');
			dispatch(toggleShowLoading(false));
		}

	}

	return (
		<div className={`description-review-area ${props.spaceBottomClass}`}>
			<div className="container">
				<div className="description-review-wrapper">
					<Tab.Container defaultActiveKey="productDescription">
						<Nav variant="pills" className="description-review-topbar">
						
							<Nav.Item>
								<Nav.Link eventKey="productDescription">Mô Tả</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="productReviews">Đánh giá {props?.paging?.total ? `(${props?.paging?.total})` : ''}</Nav.Link>
							</Nav.Item>
						</Nav>
						<Tab.Content className="description-review-bottom">

							<Tab.Pane eventKey="productDescription">
								{ReactHtmlParser(props.productFullDesc?.pro_content)}
							</Tab.Pane>
							<Tab.Pane eventKey="productReviews">
								<div className="row">
									<div className={`col-12 col-lg-${getItem('access_token') ? 7 : 12}`}>
										<div className="review-wrapper">
											{
												props.reviews?.length > 0 &&
												props.reviews.map((item, index) => {
													return (
														<div className="single-review" key={index}>
															<div className="review-img">
																<img width={80} height={80}
																	src={buildImage(item?.user?.avatar, true)}
																	alt={item?.user?.avatar}
																/>
															</div>
															<div className="review-content">
																<div className="review-top-wrap">
																	<div className="review-left d-block">
																		<div className="review-name">
																			<h4>{item?.user?.name || 'N/A'}</h4>
																		</div>
																		<div className="review-rating mt-2">
																			<StarIcons rating_number={item?.r_number} />
																		</div>
																	</div>
																</div>
																<div className="review-bottom">
																	<p className="w-100">
																		{item?.r_content}
																	</p>
																</div>
															</div>
														</div>
													)
												})
											}
										</div>
										{
											props.total > props?.paging?.pageSize &&
											<div className="mx-auto d-flex justify-content-center my-4">
												<Pagination
													onChange={e =>
														props.getDataRatings({ pageSize: props.paging.pageSize, page: e, ...props.params })
													}
													pageSize={props.paging.pageSize}
													defaultCurrent={props.paging.pageNumber + 1}
													total={props.total}
												/>
											</div>
										}
									</div>
									{
										getItem('access_token') && <div className="col-lg-5">
											<div className="ratting-form-wrapper pl-50">
												<h2>Đánh giá sản phẩm</h2>
												{
													props.productFullDesc.is_buy != 0 &&
													!props.productFullDesc.rating &&
													<div className="ratting-form">
														<Form
															name='nest-messages form'
															form={form}
															onFinish={submitForm}
															onFieldsChange={(e) => onFieldsChange(e, form)}
															validateMessages={validateMessages}
														>
															<div className="star-box d-block">
																<StarIcons setRatingNumber={setRatingNumber} rating_number={ratingNumber} form={form} is_form={true} />

															</div>
															<div className='mb-3'>
																<Form.Item name="r_content"
																	rules={[{ required: true }]}
																	className=' d-block'>
																	<TextArea className='mb-0 rating-form-style'
																		rows={5}
																		maxLength={300} placeholder='Nhập nội dung' />
																</Form.Item>
															</div>
															<div className='rating-form-style form-submit'>
																<input type="submit" defaultValue="Submit" />
															</div>
														</Form>
													</div>
												}
												{
													!props.productFullDesc.is_buy &&
													<div className="ratting-form">
														Bạn cần mua hàng để đánh giá sản phẩm này
													</div>
												}
												{
													props.productFullDesc.rating &&
													<div className="ratting-form">
														Bạn đã đánh giá sản phẩm này
													</div>
												}
											</div>
										</div>
									}
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</div>
			</div>
		</div>
	);
};

ProductDescriptionTab.propTypes = {
	productFullDesc: PropTypes.object,
	spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
