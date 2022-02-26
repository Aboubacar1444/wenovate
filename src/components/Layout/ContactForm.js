import { useState } from 'react'
import { validEmail, validFullname, validTelNumber } from '../../Validation';
const ContactForm = ({onSent}) => {
    const [fullname, setFullname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState();
    
    const onSubmit = (e) => {
        e.preventDefault();
        document.querySelector('.loading').classList.add('d-block');
        document.querySelector('.error-message').classList.remove('d-block');
        document.querySelector('.sent-message').classList.remove('d-block');
        if (fullname && !validFullname.test(fullname)) return displayError(document, "Renseignez votre nom et prénom.")
        else if (tel && !validTelNumber.test(tel))  return displayError(document, "Renseignez un numéro de téléphone correct.")
        else if (email && !validEmail.test(email))  return displayError(document, "Renseignez un E-mail correct.")
        else if(fullname.trim().length < 1 && email.trim().length < 1 && tel.trim().length < 1 ) return displayError(document, "Remplissez tous les champs correctement *.");
        else {
            onSent("template_13iid7h", {
                fullname,
                tel:tel,
                email:email,
                message:message
            })
            setFullname("");
            setTel("");
            setEmail("");
            setMessage("");
            // displaySuccess(document);
        }

    }
    function displayError(thisForm, error) {
        setTimeout(() => {
            thisForm.querySelector('.loading').classList.remove('d-block');
        }, 200)
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
        setTimeout(() => {
            thisForm.querySelector('.error-message').classList.remove('d-block');
        }, 4000)

    }

    

    

    return (
        <form className="php-email-form" onSubmit={onSubmit}>
            <div className="row">
                <div className="form-group">
                    <label htmlFor="name">Nom et prénom *</label>
                    <input type="text" autoComplete='off' className="form-control" name="fullname" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Ex: Edmond Diallo" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="tel">Téléphone *</label>
                    <input type="number" autoComplete='off' name="tel" className="form-control" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Ex: +(xxx) xx xx xx xx" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Email *</label>
                    <input type="text" autoComplete='off' className="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex: edmond13@gmail.com" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea className="form-control"  name="message" rows="7" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Je voudrais discuter à propos de..."></textarea>
            </div>
            <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Votre message a bien été envoyé, nous vous reviendrons dans les meilleurs délais. Merci!</div>
            </div>
            <div className="text-center"><button type="submit">Envoyer</button></div>
        </form>
    );
}
export default ContactForm;