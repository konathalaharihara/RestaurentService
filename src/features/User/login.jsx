import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Assuming you're using Redux for state management
import { loginSuccess, loginFailure } from '../../redux/user/user.action'; // Actions for handling login result (loginSuccess, loginFailure)
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.username) errors.username = 'Username is required';
        if (!formData.password) errors.password = 'Password is required';
        return errors;
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length === 0) {
        try {
            // Call the login API here (using fetch, axios, or another method)
            const response = await axios('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(formData),
            });
            if (!(response.statusText ==='OK')) {
                throw new Error('Login failed');
            }
            
            // Dispatch success action with the user data
            dispatch(loginSuccess(response.data));
            navigate('/auth');

            // Optionally, handle any other actions, like redirecting or showing a success message
        } catch (error) {
            // If there's an error during login, set errors and dispatch failure action
            setErrors({ api: error.message });
            dispatch(loginFailure(error.message)); // Optional: Use if you want to track failure
            console.error('Login error:', error);
        }
    } else {
        setErrors(errors);
    }
};

    useEffect(() => {
        if (window.M && window.M.updateTextFields) {
            window.M.updateTextFields();
        }
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            }}
        >
            <div className="card" style={{ width: '400px', padding: '20px', borderRadius: '8px' }}>
                <h4 className="center-align">Login</h4>

                <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input
                        type="text"
                        id="username" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange} 
                    />
                    <label  html htmlFor="username">Username</label>
                    {errors.username && <span className='helper-text' style={{ color: 'red' }}>{errors.username}</span>}
                </div>

                <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <label  html htmlFor="password">Password</label>
                    {errors.password && <span className='helper-text' style={{ color: 'red' }}>{errors.password}</span>}
                </div>

                <div className="right-align">
                    <a href="#" style={{ fontSize: '14px' }}>Forgot password?</a>
                </div>

                <div className="center-align" style={{ marginTop: '20px' }}>
                    <button
                        className="btn waves-effect waves-light"
                        style={{
                            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
                            width: '100%',
                        }}
                        onClick={handleSubmit}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
