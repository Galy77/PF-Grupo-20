/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.style.css'
import { addUser } from "../../redux/actions";
import {useDispatch} from  "react-redux"

export function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    full_name: "",
    email: "",
    password: "",
    phone:"",
    direction_shipping:"",
  });

  const [error, setError] = useState({
    full_name: "",
    email: "",
    password: "",
    phone:"",
    direction_shipping:"",
  });

  const validate = (input) => {
    let error = {};

    if (input.full_name.trim().length === 0) {
      error.full_name = "Ingrese un nombre.";
    } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
      error.full_name = "El nombre solo debe contener letras y espacios.";
    } else if (input.full_name.trim().split(" ").length < 2) {
      error.full_name = "Ingrese un nombre y apellido.";
    }

    if (input.email.trim().length === 0) {
      error.email = "Ingrese un correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      error.email = "Ingrese un correo electrónico válido.";
    }

    if (input.password.trim().length === 0) {
      error.password = "Ingrese una contraseña.";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
      error.password = "La contraseña debe contener al menos una mayúscula y un número.";
    }

    if (input.phone.trim().length === 0) {
      error.phone = "Ingrese un número de teléfono.";
    } else if (!/^\d+$/.test(input.phone)) {
      error.phone = "El número de teléfono solo debe contener dígitos.";
    } else if (input.phone.trim().length < 5) {
      error.phone = "El número de teléfono debe tener al menos 5 dígitos.";
    }

    if (input.direction_shipping.trim().length === 0) {
      error.direction_shipping = "Ingrese una dirección de envío.";
    }

    return error;
  };
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value
      })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0) {
      const newUser = { ...input };
      console.log("envio", newUser);
      dispatch(addUser(newUser))
        .then((res) => {
          console.log("respuesta: ", res);
          if (res) {
            alert("¡El usuario se registró exitosamente!");
            setInput({
              full_name: "",
              email: "",
              password: "",
              phone: "",
              direction_shipping: ""
            });
            navigate("/");
          }
        })
        .catch((error) => {
          alert("Error al agregar el usuario.");
          console.log(error);
        });
    } else {
      alert("Faltan datos.");
    }
  };

  return (
    <div className="register-container">
     
      <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h1 className="register-title-h1-prop">Registrase</h1>
        <div className="mb-3">
          <label htmlFor="full_name" className="form-label">
            Nombre completo
          </label>
          <input
            name="full_name"
            value={input.full_name} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="Matias Nicolas Lanza"
          />
        </div>
        {error.full_name && <p>{error.full_name}</p>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={input.email} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="youremail@company.tld"
          />
        </div>
        {error.email && <p>{error.email}</p>}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            name="password"
            value={input.password} 
            onChange={handleChange} 
            type="password"
            className="form-register-control"
            placeholder="*************"
          />
        </div>
        {error.password && <p>{error.password}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Numero de Telefono
          </label>
          <div className="phone-select">
            <select id="codigoArea" className="select-ctrys">
              <option value="nn">Area</option>
              <option value="+1">Estados Unidos (+1)</option>
              <option value="+1">Canadá (+1)</option>
              <option value="+7">Rusia (+7)</option>
              <option value="+20">Egipto (+20)</option>
              <option value="+27">Sudáfrica (+27)</option>
              <option value="+30">Grecia (+30)</option>
              <option value="+31">Países Bajos (+31)</option>
              <option value="+32">Bélgica (+32)</option>
              <option value="+33">Francia (+33)</option>
              <option value="+34">España (+34)</option>
              <option value="+36">Hungría (+36)</option>
              <option value="+39">Italia (+39)</option>
              <option value="+40">Rumania (+40)</option>
              <option value="+41">Suiza (+41)</option>
              <option value="+43">Austria (+43)</option>
              <option value="+44">Reino Unido (+44)</option>
              <option value="+45">Dinamarca (+45)</option>
              <option value="+46">Suecia (+46)</option>
              <option value="+47">Noruega (+47)</option>
              <option value="+48">Polonia (+48)</option>
              <option value="+49">Alemania (+49)</option>
              <option value="+51">Perú (+51)</option>
              <option value="+52">México (+52)</option>
              <option value="+53">Cuba (+53)</option>
              <option value="+54">Argentina (+54)</option>
              <option value="+55">Brasil (+55)</option>
              <option value="+56">Chile (+56)</option>
              <option value="+57">Colombia (+57)</option>
              <option value="+58">Venezuela (+58)</option>
              <option value="+60">Malasia (+60)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+62">Indonesia (+62)</option>
              <option value="+63">Filipinas (+63)</option>
              <option value="+64">Nueva Zelanda (+64)</option>
              <option value="+65">Singapur (+65)</option>
              <option value="+66">Tailandia (+66)</option>
              <option value="+81">Japón (+81)</option>
              <option value="+82">Corea del Sur (+82)</option>
              <option value="+84">Vietnam (+84)</option>
              <option value="+86">China (+86)</option>
              <option value="+90">Turquía (+90)</option>
              <option value="+91">India (+91)</option>
              <option value="+92">Pakistán (+92)</option>
              <option value="+93">Afganistán (+93)</option>
              <option value="+94">Sri Lanka (+94)</option>
              <option value="+95">Myanmar (Birmania) (+95)</option>
              <option value="+98">Irán (+98)</option>
              <option value="+212">Marruecos (+212)</option>
              <option value="+213">Argelia (+213)</option>
              <option value="+216">Túnez (+216)</option>
              <option value="+218">Libia (+218)</option>
              <option value="+220">Gambia (+220)</option>
              <option value="+221">Senegal (+221)</option>
              <option value="+222">Mauritania (+222)</option>
              <option value="+223">Malí (+223)</option>
              <option value="+224">Guinea (+224)</option>
              <option value="+225">Costa de Marfil (+225)</option>
              <option value="+226">Burkina Faso (+226)</option>
              <option value="+227">Níger (+227)</option>
              <option value="+228">Togo (+228)</option>
              <option value="+229">Benin (+229)</option>
              <option value="+230">Mauricio (+230)</option>
              <option value="+231">Liberia (+231)</option>
              <option value="+232">Sierra Leona (+232)</option>
              <option value="+233">Ghana (+233)</option>
              <option value="+234">Nigeria (+234)</option>
              <option value="+235">Chad (+235)</option>
              <option value="+236">República Centroafricana (+236)</option>
              <option value="+237">Camerún (+237)</option>
              <option value="+238">Cabo Verde (+238)</option>
              <option value="+239">Santo Tomé y Príncipe (+239)</option>
              <option value="+240">Guinea Ecuatorial (+240)</option>
              <option value="+241">Gabón (+241)</option>
              <option value="+242">Congo (+242)</option>
              <option value="+243">República Democrática del Congo (+243)</option>
              <option value="+244">Angola (+244)</option>
              <option value="+245">Guinea-Bissau (+245)</option>
              <option value="+246">Territorio Británico del Océano Índico (+246)</option>
              <option value="+247">Territorio Británico de Ultramar (+247)</option>
              <option value="+248">Seychelles (+248)</option>
              <option value="+249">Sudán (+249)</option>
              <option value="+250">Ruanda (+250)</option>
              <option value="+251">Etiopía (+251)</option>
              <option value="+252">Somalia (+252)</option>
              <option value="+253">Yibuti (+253)</option>
              <option value="+254">Kenia (+254)</option>
              <option value="+255">Tanzania (+255)</option>
              <option value="+256">Uganda (+256)</option>
              <option value="+257">Burundi (+257)</option>
              <option value="+258">Mozambique (+258)</option>
              <option value="+260">Zambia (+260)</option>
              <option value="+261">Madagascar (+261)</option>
              <option value="+262">Reunión (+262)</option>
              <option value="+263">Zimbabue (+263)</option>
              <option value="+264">Namibia (+264)</option>
              <option value="+265">Malawi (+265)</option>
              <option value="+266">Lesotho (+266)</option>
              <option value="+267">Botswana (+267)</option>
              <option value="+268">Suazilandia (+268)</option>
              <option value="+269">Comoras (+269)</option>
              <option value="+290">Santa Elena, Ascensión y Tristán de Acuña (+290)</option>
              <option value="+291">Eritrea (+291)</option>
              <option value="+297">Aruba (+297)</option>
              <option value="+298">Islas Feroe (+298)</option>
              <option value="+299">Groenlandia (+299)</option>
              <option value="+350">Gibraltar (+350)</option>
              <option value="+351">Portugal (+351)</option>
              <option value="+352">Luxemburgo (+352)</option>
              <option value="+353">Irlanda (+353)</option>
              <option value="+354">Islandia (+354)</option>
              <option value="+355">Albania (+355)</option>
              <option value="+356">Malta (+356)</option>
              <option value="+357">Chipre (+357)</option>
              <option value="+358">Finlandia (+358)</option>
              <option value="+359">Bulgaria (+359)</option>
              <option value="+370">Lituania (+370)</option>
              <option value="+371">Letonia (+371)</option>
              <option value="+372">Estonia (+372)</option>
              <option value="+373">Moldavia (+373)</option>
              <option value="+374">Armenia (+374)</option>
              <option value="+375">Bielorrusia (+375)</option>
              <option value="+376">Andorra (+376)</option>
              <option value="+377">Mónaco (+377)</option>
              <option value="+378">San Marino (+378)</option>
              <option value="+379">Ciudad del Vaticano (+379)</option>
              <option value="+380">Ucrania (+380)</option>
              <option value="+381">Serbia (+381)</option>
              <option value="+382">Montenegro (+382)</option>
              <option value="+385">Croacia (+385)</option>
              <option value="+386">Eslovenia (+386)</option>
              <option value="+387">Bosnia y Herzegovina (+387)</option>
              <option value="+389">Macedonia del Norte (+389)</option>
              <option value="+420">República Checa (+420)</option>
              <option value="+421">Eslovaquia (+421)</option>
              <option value="+423">Liechtenstein (+423)</option>
              <option value="+500">Islas Malvinas (+500)</option>
              <option value="+501">Belice (+501)</option>
              <option value="+502">Guatemala (+502)</option>
              <option value="+503">El Salvador (+503)</option>
              <option value="+504">Honduras (+504)</option>
              <option value="+505">Nicaragua (+505)</option>
              <option value="+506">Costa Rica (+506)</option>
              <option value="+507">Panamá (+507)</option>
              <option value="+508">San Pedro y Miquelón (+508)</option>
              <option value="+509">Haití (+509)</option>
              <option value="+590">Guadalupe (+590)</option>
              <option value="+591">Bolivia (+591)</option>
              <option value="+592">Guyana (+592)</option>
              <option value="+593">Ecuador (+593)</option>
              <option value="+594">Guayana Francesa (+594)</option>
              <option value="+595">Paraguay (+595)</option>
              <option value="+596">Martinica (+596)</option>
              <option value="+597">Surinam (+597)</option>
              <option value="+598">Uruguay (+598)</option>
              <option value="+599">Caribe Neerlandés (+599)</option>
              <option value="+670">Timor Oriental (+670)</option>
              <option value="+672">Islas Cocos (+672)</option>
              <option value="+673">Brunéi (+673)</option>
              <option value="+674">Nauru (+674)</option>
              <option value="+675">Papúa Nueva Guinea (+675)</option>
              <option value="+676">Tonga (+676)</option>
              <option value="+677">Islas Salomón (+677)</option>
              <option value="+678">Vanuatu (+678)</option>
              <option value="+679">Fiyi (+679)</option>
              <option value="+680">Palau (+680)</option>
              <option value="+681">Wallis y Futuna (+681)</option>
              <option value="+682">Islas Cook (+682)</option>
              <option value="+683">Niue (+683)</option>
              <option value="+684">Samoa Americana (+684)</option>
              <option value="+685">Samoa (+685)</option>
              <option value="+686">Kiribati (+686)</option>
              <option value="+687">Nueva Caledonia (+687)</option>
              <option value="+688">Tuvalu (+688)</option>
              <option value="+689">Polinesia Francesa(+689)</option>
              <option value="+690">Tokelau(+690)</option>
              <option value="+691">Micronesia(+691)</option>
              <option value="+692">Islas Marshall(+692)</option>
              <option value="+850">Corea del Norte(+850)</option>
              <option value="+852">Hong Kong(+852)</option>
              <option value="+853">Macao(+853)</option>
              <option value="+855">Camboya(+855)</option>
              <option value="+856">Laos(+856)</option>
              <option value="+880">Bangladesh (+880)</option>
              <option value="+886">Taiwán(+886)</option>
              <option value="+960">Maldivas(+960)</option>
              <option value="+961">Líbano(+961)</option>
              <option value="+962">Jordania(+962)</option>
              <option value="+963">Siria(+963)</option>
              <option value="+964">Irak(+964)</option>
              <option value="+965">Kuwait(+965)</option>
              <option value="+966">Arabia Saudita(+966)</option>
              <option value="+967">Yemen(+967)</option>
              <option value="+968">Omán(+968)</option>
              <option value="+970">Palestina(+970)</option>
              <option value="+971">Emiratos Árabes Unidos(+971)</option>
              <option value="+972">Israel(+972)</option>
              <option value="+973">Baréin(+973)</option>
              <option value="+974">Catar(+974)</option>
              <option value="+975">Bután(+975)</option>
              <option value="+976">Mongolia(+976)</option>
              <option value="+977">Nepal(+977)</option>
              <option value="+992">Tayikistán(+992)</option>
              <option value="+993">Turkmenistán(+993)</option>
              <option value="+994">Azerbaiyán(+994)</option>
              <option value="+995">Georgia(+995)</option>
              <option value="+996">Kirguistán(+996)</option>
              <option value="+998">Uzbekistán(+998)</option>
              <option value="+1242">Bahamas(+1242)</option>
              <option value="+1246">Barbados(+1246)</option>
              <option value="+1264">Anguila(+1264)</option>
              <option value="+1268">Antigua y Barbuda(+1268)</option>
              <option value="+1284">Islas Vírgenes Británicas(+1284)</option>
              <option value="+1340">Islas Vírgenes de los Estados Unidos(+1340)</option>
              <option value="+1345">Islas Caimán(+1345)</option>
              <option value="+1441">Bermudas(+1441)</option>
              <option value="+1473">Granada(+1473)</option>
              <option value="+1649">Islas Turcas y Caicos(+1649)</option>
              <option value="+1664">Montserrat(+1664)</option>
              <option value="+1670">Islas Marianas del Norte (+1670)</option>
              <option value="+1671">Guam(+1671)</option>
              <option value="+1684">Samoa Americana(+1684)</option>
              <option value="+1758">Santa Lucía(+1758)</option>
              <option value="+1767">Dominica(+1767)</option>
              <option value="+1784">San Vicente y las Granadinas(+1784)</option>
              <option value="+1787">Puerto Rico(+1787)</option>
              <option value="+1809">República Dominicana(+1809)</option>
              <option value="+1829">República Dominicana(+1829)</option>
              <option value="+1849">República Dominicana(+1849)</option>
              <option value="+1868">Trinidad y Tobago(+1868)</option>
              <option value="+1869">San Cristóbal y Nieves(+1869)</option>
              <option value="+1876">Jamaica(+1876)</option>
              <option value="+1939">Puerto Rico(+1939)</option>
            </select>
            <input
              name="phone"
              value={input.phone} 
              onChange={handleChange} 
              type="text"
              className="form-register-control-phone"
              placeholder="Ej: 266-445481"
            />
          </div>
          </div>
          
        {error.phone && <p>{error.phone}</p>}

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Direccion
          </label>
          <input
            name="direction_shipping"
            value={input.direction_shipping} 
            onChange={handleChange} 
            type="text"
            className="form-register-control"
            placeholder="Calle 10 Dept. 15"
          />
        </div>
        {error.direction_shipping && <p>{error.direction_shipping}</p>}
        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>
      <p>
        Ya tienes una cuenta? <Link to="/login" className="linkR">iniciar Sesion</Link>
      </p>
      </div>
      
    </div>
  );
}
