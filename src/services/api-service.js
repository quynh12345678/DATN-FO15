// @ts-nocheck
import axios from 'axios'
import { WEB_VALUE, timeDelay } from '../helpers/constant';
import { getItem } from './common';

const axiosClient = axios.create( {
	baseURL: WEB_VALUE.API,
	headers: {
		'Content-Type': 'application/json',
		// 'Authorization': 'Bearer ' + getItem( 'access_token' )
	},
	body: JSON.stringify(),
} )

if ( getItem( 'access_token' ) )
{
	axiosClient.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + getItem( 'access_token' );
}
axiosClient.interceptors.response.use(
	( response ) =>
	{
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		let data = response?.data;
		if ( ( data && response?.status === 403 ) )
		{
			localStorage.clear();
			window.location.href = `/auth`;
		}

		return response?.data;
	},
	( error ) =>
	{
		console.log( 'error--------> ', error.response?.status );
		if ( error?.response?.status === 401 || error?.response?.status?.statusCode === 401 )
		{
			localStorage.clear();
			window.location.href = `/auth`;
		}

		let dataError = error.response?.data || null;
		if ( ( dataError && error.response?.status === 403 ) )
		{
			localStorage.clear();
			window.location.href = `/auth`;
		}
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject( error.response?.data )
	}
)

export const postMethod = async ( path, data ) =>
{
	await timeDelay( 1000 )
	return await axiosClient.post( `${ WEB_VALUE.API }/${ path }`, data )
		.then( response => response )
		.catch( error =>
		{
			return {
				status: 'error',
				message: error.error || 'Invalid!'
			}
		} );
}

export const getMethod = async ( path, params ) =>
{
	await timeDelay( 1000 )
	return await axiosClient.get( `${ WEB_VALUE.API }/${ path }`, { params: params } )
		.then( response =>
		{

			return response;
		} )
		.catch( error =>
		{
			return {
				status: 'error',
				message: error.error || 'Invalid!'
			}
		} );
}

export const putMethod = async ( path, data ) =>
{
	await timeDelay( 1000 )
	return await axiosClient.put( `${ WEB_VALUE.API }/${ path }`, data )
		.then( response => response )
		.catch( error =>
		{
			return {
				status: 'error',
				message: error.error || 'Invalid!'
			}
		} );
}

export const deleteMethod = async ( path ) =>
{
	await timeDelay( 1000 )
	return await axiosClient.delete( `${ WEB_VALUE.API }/${ path }` )
		.then( response => response )
		.catch( error =>
		{
			return {
				status: 'error',
				message: error.error || 'Invalid!'
			}
		} );
}


export const postImage = ( path, data ) =>
{

	return axios.post( `${ WEB_VALUE.API }/${ path }`, data, { headers: { 'Content-Type': 'multipart/form-data' } } )
		.then( response => response?.data )
		.catch( error =>
		{
		} );
}
export const uploadFile = async ( file ) =>
{
	let avatar = null;
	const formData = new FormData();
	formData.append( 'file', file );
	const res = await axios.post( `${ process.env.REACT_APP_URL_UPLOAD }/upload/image`,
		formData, { headers: { 'Content-Type': 'multipart/form-data' } } );
	let data = res.data;

	if ( data?.status === 'success' )
	{
		avatar = data?.filename;
	}
	return avatar;
}
