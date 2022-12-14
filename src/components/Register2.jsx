import './styles/loginRegistration.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../hooks/UserContext';
import { useContext } from 'react';
import * as Yup from 'yup';
import backArrow from '../assets/icons/backArrow.png';
import RegisterServices from '../hooks/register.services';

export const Register2 = () => {
	const navigate = useNavigate();
	const { prevStep, userData, typeUser } = useContext(UserContext);
	const createUser = RegisterServices.createUser;
	const handleBack = event => {
		event.preventDefault();
		prevStep();
	};

	const formSchema = Yup.object().shape({
		password: Yup.string()
			.required()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_-]{8,15}$/
			),
		confirmPassword: Yup.string().oneOf(
			[Yup.ref('password')],
			'Las contraseñas no coinciden.'
		),
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
		userData.password = data.password;
		console.log(data);
		createUser(userData, typeUser).then(res => {
			if (res.status === 201) {
				alert('Usuario creado con exito');
				navigate('/');
			} else if (res.status === 400) {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			} else {
				const req = res.json();
				req.then(errors => alert(errors.errors));
			}
		});
	};

	return (
		<div>
			<div className='space2vh'></div>
			<span className='spaceRight'>
				<button className='backArrow' title='Volver' onClick={handleBack}>
					<img src={backArrow} />
				</button>
			</span>
			<div className='space10vh'></div>
			<h2 className='createAPasswordCaption'>
				Por último, crea una contraseña segura:
			</h2>
			<div className='space9px'></div>
			<form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
				<input
					className='textField'
					title='Contraseña'
					name='password'
					type='password'
					{...register('password')}
					placeholder='Contraseña'
				/>
				<div className='space9px'></div>
				<input
					className='textField'
					title='Confirmar contraseña'
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
				<div className='space14px'></div>
				<span id='error' className='errorMessage'>
					<span>
						{errors.password?.type === 'required' && (
							<small>
								Completa el campo.
								<br></br>
							</small>
						)}
						{errors.password?.type === 'matches' && (
							<small>
								<br></br>Ingresa entre 8 a 15 caracteres y al menos
								<br></br>una letra mayúscula, una minúscula, un número y un
								caracter especial.
								<br></br>No ingreses espacios en blanco.
								<br></br>
							</small>
						)}
					</span>
					<span>
						<small>{errors.confirmPassword?.message}</small>
						<br></br>
					</span>
				</span>
			</form>
		</div>
	);
};
