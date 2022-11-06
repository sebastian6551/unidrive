import './styles/loginRegistration.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import backArrow from '../assets/icons/backArrow.png';

export const Register2 = () => {
	const navigate = useNavigate();

	const handleBack = event => {
		event.preventDefault();
		navigate('/register');
	};

	const formSchema = Yup.object().shape({
		password: Yup.string()
			.required('Completa el campo.')
			.min(8, 'Ingresa al menos 8 caracteres.'),
		confirmPassword: Yup.string()
			// .string().marches(regex)
			.oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.'),
	});

	const formOptions = {
		resolver: yupResolver(formSchema),
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(formOptions);

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div>
			<div className='space10px'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div className='space100px'></div>
			<h2 className='createAPasswordCaption'>
				Por último, crea una contraseña segura:
			</h2>
			<div className='space10px'></div>
			<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
				<input
					className='textField'
					name='password'
					type='password'
					{...register('password')}
					placeholder='Contraseña'
				/>
				<div className='space10px'></div>
				<input
					className='textField'
					name='confirmPassword'
					type='password'
					{...register('confirmPassword')}
					placeholder='Confirmar contraseña'
				/>
				<div className='space30px'></div>
				<input
					title='Crear cuenta'
					className='logInButton'
					type='submit'
					value='Crear cuenta'
				/>
				<div className='space16px'></div>
				<span id='error' className='errorMessage'>
					<span>
						{errors.password?.message}
						<br></br>
					</span>
					<span>
						{errors.confirmPassword?.message}
						<br></br>
					</span>
				</span>
			</form>
		</div>
	);
}
