import { useState } from 'react'

function Form({addContact,contacts}) {
    const defaultForm={fullname:"",phone_number:""};
    const [form, setForm] = useState({defaultForm});
    const onChangedForm=(event)=>
    {
        setForm({...form,[event.target.name]: event.target.value});
    }

    const onSubmit=(event)=>
    {
        event.preventDefault(); //Durdurur.
        if(form.fullname==="" || form.phone_number==="")
        {
            return false;
        }
        addContact([...contacts,form])
        setForm(defaultForm);
        console.log(form);
    }
    return (
        <div>
            <hr/>
            <form onSubmit={onSubmit}>
            <div>
                İsim Giriniz:
                <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={onChangedForm}/>
                <br />
            </div>
            <div>
                Numara Giriniz:
                <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={onChangedForm}></input>
            </div>
            <div>
                <button> Kayıt Ekle </button>
            </div>
            </form>
        </div>

    );
}

export default Form