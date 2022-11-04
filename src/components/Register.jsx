import './styles/register.css';
import { useForm } from 'react-hook-form'

export const Register = () => {
	const { register,formState:{errors},handleSubmit } = useForm()
	
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
		<div className='base'>
			<h1 className='h1'> Regístrate </h1>
            <div>
			<form onSubmit={handleSubmit(onSubmit)}>			
					<label className='labelStyle'>Nombre</label>
					<input className='inputStyle' type='text' {...register('name',{
                        required: true,
                        maxLength:20
                         })} />
                         {errors.name?.type === 'required' && <small>El campo no puede estar vacio</small>}
				
					<label className='labelStyle'>Apellidos</label>
					<input className='inputStyle' type='text' {...register('lname',{
                        required: true,
                        maxLength:20
                         })} />
                         {errors.lname?.type === 'required' && <small>El campo no puede estar vacio</small>}

                    <label className='labelStyle'>Fecha de nacimiento</label>
					<input className='inputStyle' type='text' {...register('birthday')} />

                    <label className='labelStyle'>Celular</label>
					<input className='inputStyle' type='text' {...register('phoneNumber',{
                        required: true,
                        minLength:10,
                        maxLength:10
                         })} />
                         {errors.lname?.type === 'required' && <small>El campo no puede estar vacio</small>}

                    <label className='labelStyle'>Correo institucional</label>
					<input className='inputStyle' type='text' {...register('email')} />

                    <label className='labelStyle'>Ciudad de residencia</label>
					<input className='inputStyle' type='text' {...register('residenceCity')} />
				<button type='submit'>Continuar</button>
			</form>
            </div>
		</div>
	);
};
	