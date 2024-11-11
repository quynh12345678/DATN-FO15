import { Tab } from "react-bootstrap";
import React, { Fragment } from "react";
import { useForm } from "antd/es/form/Form";
import { onFieldsChange, validateMessages } from "../../services";
import { Form, Input, message } from "antd";
import { Auth_Service } from "../../services/shop/auth-service";
import { useDispatch } from "react-redux";
import { toggleShowLoading } from "../../redux/actions/common";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const LoginForm = ( props ) =>
{
	const [ form ] = useForm();
	const dispatch = useDispatch();

	const submitForm = async ( e ) =>
	{
		dispatch( toggleShowLoading( true ) );
		const response = await Auth_Service.login(e);

		if ( response?.status == 'success' )
		{
			localStorage.setItem( 'access_token', response?.token );
			localStorage.setItem( 'name', response?.user?.name );
			localStorage.setItem( 'email', response?.user?.email );
			localStorage.setItem( 'phone', response?.user?.phone );
			localStorage.setItem( 'gender', response?.user?.gender );
			localStorage.setItem( 'avatar', response?.user?.avatar );
			localStorage.setItem( 'address', response?.user?.address );
			localStorage.setItem( 'id', response?.user?.id );
			message.success("Đăng nhập thành công")
			window.location.href = '/';
		} else
		{
			message.error( response?.message || 'Đăng nhập thất bại' );
		}
		dispatch( toggleShowLoading( false ) );
	}

	return (
		<div className="login-form-container">
			<h2 className="text-center">Đăng nhập</h2>
			<div className="login-register-form">
				<Form
					className='p-3'
					name='nest-messages form'
					form={ form }
					onFinish={ submitForm }
					onFieldsChange={ ( e ) => onFieldsChange( e, form ) }
					validateMessages={ validateMessages }
				>
					<div className='mb-3'>
						<Form.Item name="email"
							rules={ [ { required: true } ] }
							className=' d-block'>
							<Input className='mb-0' placeholder='Nhập username hoặc mail' />
						</Form.Item>
					</div>
					<div className="mt-5 mb-3">
						<Form.Item name="password"
							rules={ [ { required: true } ] }
							className=' d-block '>
							<Input.Password type="password" className='mb-0' placeholder='Nhập mật khẩu' />
						</Form.Item>

					</div>

					<div className='button-box d-flex'>
						<button type="submit" className="w-100" style={ { padding: '15px 50px', fontSize: "16px", borderRadius: "10px" } }>
							Đăng nhập
						</button>
					</div>
				</Form>
				<div className="d-md-flex justify-content-md-between">
					{/* <Link to={ "/reset-password/send-mail" } className="text-primary">
						Quên mật khẩu?
					</Link> */}
					<Link to={ "/auth/register" } className="text-primary">
						Tạo tài khoản
					</Link>
				</div>

			</div>

		</div>
	);
}
