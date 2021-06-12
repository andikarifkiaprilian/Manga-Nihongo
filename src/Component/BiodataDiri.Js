import React, {useState} from 'react'; 
import { Grid, Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import ErrorIcon from '@material-ui/icons/Error';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { useForm } from "react-hook-form";
import PublishIcon from '@material-ui/icons/Publish';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import Swal from 'sweetalert2';
import * as Yup from 'yup'
import TextError from './TextError.js'



const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      borderRadius: '1rem',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
        borderRadius: '1rem'
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
        backgroundColor: '#22689F',
        borderRadius: '1rem',
        color: '#ffff'
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);



const onSubmit = (values, onSubmitProps) => {
        console.log('form data', values)
        console.log('submit props', onSubmitProps)
        onSubmitProps.setsSubmitting(false)
        onSubmitProps.resetForm()
      
}


// values => {
//     console.log('form data', values)
// }





function UKTRumah ( ) {


const initialValues = {
}
const validationSchema = Yup.object({
})
    const statusRumah = ["Milik Sendiri", "Tinggal Bersama", "Mengontrak", "Menumpang"];
    const [rumah, setRumah] = useState("");

    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    
      function sweetAlertclick(){
        Swal.fire({
            icon: 'success',
            title: 'Data anda sudah tersimpan ',
          })
    }    
  
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnMount
        > 
        {
            formik => {
                const isValidValue = formik.isValid? ("Data anda sudah lengkap") : ("Data anda belum Lengkap");
                console.log('Formik props', formik)
                return( 
                   
        <div className ="IsiBiodata"> 


      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{marginLeft: '15rem', marginRight: '15rem', marginTop: '3rem'}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <PersonIcon style={{width: '2rem', marginTop: '0px'}}/>
         <Typography style={{marginBottom: '5px', marginTop: '3px', marginLeft: '1rem', fontSize: '1rem'}}>  Data Rumah</Typography>
         <Typography style={{marginBottom: '5px', marginTop: '3px', marginLeft: '45rem', fontSize: '1rem'}}> { isValidValue }
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className ="IsiBiodata"> 
        
       

<Form>

<div className="InformasiForm">
<ErrorIcon style={{fontSize: '25px', color: '#22689F', marginTop: '8px', marginLeft: '1rem'}}/> Seluruh data pada kolom wajib diisi
</div>


<div >
StatusRumah
  {statusRumah.map(statusRumah => ( 
  <div > 
    <Field type="radio" key={statusRumah} onClick={() => setRumah(statusRumah)} name="Status Rumah" value={statusRumah}  style={{marginBottom:'1rem'}}/>{statusRumah}
                  </div> 
                    
                        ))}
<div> 
  <section>
    {rumah === "Milik Sendiri" && (
           <MilikSendiri />
    )}
    {rumah === "Tinggal Bersama" && (
          <TinggalBersama />
    )} 
    {rumah === "Mengontrak" && (
              <Mengontrak />
    
      )}
  </section>

</div>
 

</div>

        </Form>
        
        </div>
        </AccordionDetails>
      </Accordion>

                </div>
            
            )}  
            }
               </Formik>

    )
}

function MilikSendiri({isValidValue}) {


const initialValues = {
  luasTanah:'',
  BiayaPBB:'',
}
const validationSchema = Yup.object({
  luasTanah: Yup.string().required('*tidak boleh kosong'),
  BiayaPBB: Yup.string().required('*tidak boleh kosong')
})
  const { register, handleSubmit } = useForm()

        const onsubmit = (data) => {
            console.log(data)
        }

        function sweetAlertclick(){
          Swal.fire({
              icon: 'success',
              title: 'Data anda sudah tersimpan ',
            })
      }    
        return (
      <Formik 
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
              > 
              {
                formik => {

                  // const IsValidValue = ({ formik, setIsValid, isValid }) => {
                  //   useEffect(() => {
                  //     setIsValid(formik.isValid)
                  //   } [formik.isValid]); 

                  // }
                  
                  const isValidValue = formik.isValid? ("Data anda sudah lengkap") : ("Data anda belum Lengkap");
                return(
            <div>
                <div>
                  Status : {isValidValue} <br />
                 <div>
                 <label htmlFor="luasTanah"> Status Sertifikat </label>
                  <Field type="radio" style={{marginLeft: '4rem'}}/> Hak Milik
                  <Field type="radio" style={{marginLeft: '4rem'}}/> Tanah Girik
                  <Field type="radio" style={{marginLeft: '4rem'}}/> Hak Guna Bagunan
                  <Field type="radio" style={{marginLeft: '4rem'}}/> Tanpa Sertifikat
                  <Field type="radio" style={{marginLeft: '4rem'}}/> Lainnya
                 </div>
                <label htmlFor="luasTanah"> Luas Tanah </label>
                <Field className="formBiodata"
                type="text" id="outlined-basic" 
                placeholder="luasTanah"
                fullWidth
                id="luasTanah"
                name="luasTanah"
                margin="normal" variant="outlined"
                />
                <ErrorMessage name='luasTanah' component={TextError}/>
                </div>

                        <div>
                  <label htmlFor="BiayaPBB"> Biaya PBB </label>
                  <Field className="formBiodata"
                  type="text" id="outlined-basic" 
                  placeholder="BiayaPBB"
                  fullWidth
                  id="BiayaPBB"
                  name="BiayaPBB"
                  margin="normal" variant="outlined"
                  />
                  <ErrorMessage name='BiayaPBB' component={TextError}/>
                  </div>

                  <div>
                  <label htmlFor="luasTanah"> Unggah Tagihan PBB </label>
                  <form onSubmit={handleSubmit(onsubmit)}> 
                  <Grid container>
                      <Grid item sm={6}>
                      <Button variant="contained" 
                      startIcon={<PublishIcon/>} 
                      component="label" 
                      style={{marginLeft:'1rem',width: '30rem', height: 45, fontSize: 15, backgroundColor: '#22689F', color: 'white', marginTop:'10px'}}>
                        Unggah Tagihan PBB
                      <input ref={register} type="file" name="tagihanPBB" hidden/> 
                        </Button> 
                        </Grid>
                      <Grid item sm={6}> 
                      <Button type="submit" 
                              variant="contained" 
                              startIcon={<DescriptionIcon />} 
                              color="primary" style={{ width: '30rem',marginLeft:'1rem', height: 45, fontSize: 15, backgroundColor: '#44A8C4', marginTop:'10px'}} 
                              disableElevation
                          ><a href="./Assets/Sertifikat.pdf" target="_blank" style={{textDecoration:'none', color:'#ffff'}}> Lihat File </a></Button>
                      </Grid>
                  </Grid>
                  </form>
                  </div>




        <Button  onClick={sweetAlertclick} type ="submit" variant="contained" startIcon={<SaveIcon />} color="primary" style={{ marginLeft: '25rem', marginTop: '20px', width: '20rem', height: 45, fontSize: 22, backgroundColor: '#22689F'}} 
        disabled={!formik.isDirty && !formik.isValid}  >Simpan</Button>



            </div>
          )
          }
        }

        </Formik>
  )
}


function TinggalBersama () {
 



  const initialValues = {
    biayaKontrak:''
  }
  const validationSchema = Yup.object({
    biayaKontrak: Yup.string().required('*tidak boleh kosong')
  })
    const { register, handleSubmit } = useForm()
  
  const onsubmit = (data) => {
      console.log(data)
  }
  
  function sweetAlertclick(){
    Swal.fire({
        icon: 'success',
        title: 'Data anda sudah tersimpan ',
      })
  }    
  return (
  <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
        > 
        {
          formik => {
            const isValidValue = formik.isValid? ("Data anda sudah lengkap") : ("Data anda belum Lengkap");
          return(
            <div>
              
  
      <div>
        Status : {isValidValue}
      <label htmlFor="luasTanah"> Biaya Kontrak </label>
      <Field className="formBiodata"
      type="text" id="outlined-basic" 
      placeholder="luasTanah"
      fullWidth
      id="biayaKontrak"
      name="biayaKontrak"
      margin="normal" variant="outlined"
      />
      <ErrorMessage name='biayaKontrak' component={TextError}/>
      </div>
  
        <div>
        <label htmlFor="Surat Kontrak"> Unggah Surat Kontrak </label>
        <form onSubmit={handleSubmit(onsubmit)}> 
        <Grid container>
            <Grid item sm={6}>
            <Button variant="contained" startIcon={<PublishIcon/>} component="label" style={{marginLeft:'1rem',width: '30rem', height: 45, fontSize: 15, backgroundColor: '#22689F', color: 'white', marginTop:'10px'}}  > Unggah Surat Kontrak
            <input ref={register} type="file" name="tagihanPBB" hidden/> 
               </Button> 
               </Grid>
            <Grid item sm={6}> 
            <Button
                     variant="contained" 
                     startIcon={<SaveIcon />} 
                     color="primary" style={{ width: '30rem',marginLeft:'1rem', height: 45, fontSize: 15, backgroundColor: '#44A8C4', marginTop:'10px'}} 
                    disableElevation
                ><a href="./Assets/SuratKontrak.pdf" target="_blank" style={{textDecoration:'none', color:'#ffff'}}> Lihat File </a></Button>
  
                <Button
                     variant="contained" 
                     startIcon={<DescriptionIcon />} 
                     color="primary" style={{ width: '17rem', padding: '1rem', marginLeft:'6rem', height: '5rem', fontSize: 15, backgroundColor: '#81BADB', marginTop:'10px'}} 
                    disableElevation
                ><a href="./Assets/SuratKontrak.pdf" target="_blank" style={{textDecoration:'none', color:'#ffff'}}> Lihat contoh surat perjanjian kontrak </a></Button>
                
            </Grid>
        </Grid>
        </form>
        </div>
  
  
  
  
        <Button  onClick={sweetAlertclick} type ="submit" variant="contained" startIcon={<SaveIcon />} color="primary" style={{ marginLeft: '25rem', marginTop: '20px', width: '20rem', height: 45, fontSize: 22, backgroundColor: '#22689F'}} 
        disabled={!formik.isDirty && !formik.isValid}  >Simpan</Button>
  
  
  
            </div>
          )
          }
        }
  
        </Formik>
  )
}

function Mengontrak(){  



const initialValues = {
  biayaKontrak:''
}
const validationSchema = Yup.object({
  biayaKontrak: Yup.string().required('*tidak boleh kosong')
})
  const { register, handleSubmit } = useForm()

const onsubmit = (data) => {
    console.log(data)
}

function sweetAlertclick(){
  Swal.fire({
      icon: 'success',
      title: 'Data anda sudah tersimpan ',
    })
}    
return (
<Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      > 
      {
        formik => {
          const isValidValue = formik.isValid? ("Data anda sudah lengkap") : ("Data anda belum Lengkap");
        return(
          <div>
            

    <div>
      Status : {isValidValue}
    <label htmlFor="luasTanah"> Biaya Kontrak </label>
    <Field className="formBiodata"
    type="text" id="outlined-basic" 
    placeholder="luasTanah"
    fullWidth
    id="biayaKontrak"
    name="biayaKontrak"
    margin="normal" variant="outlined"
    />
    <ErrorMessage name='biayaKontrak' component={TextError}/>
    </div>

      <div>
      <label htmlFor="Surat Kontrak"> Unggah Surat Kontrak </label>
      <form onSubmit={handleSubmit(onsubmit)}> 
      <Grid container>
          <Grid item sm={6}>
          <Button variant="contained" startIcon={<PublishIcon/>} component="label" style={{marginLeft:'1rem',width: '30rem', height: 45, fontSize: 15, backgroundColor: '#22689F', color: 'white', marginTop:'10px'}}  > Unggah Surat Kontrak
          <input ref={register} type="file" name="tagihanPBB" hidden/> 
             </Button> 
             </Grid>
          <Grid item sm={6}> 
          <Button
                   variant="contained" 
                   startIcon={<SaveIcon />} 
                   color="primary" style={{ width: '30rem',marginLeft:'1rem', height: 45, fontSize: 15, backgroundColor: '#44A8C4', marginTop:'10px'}} 
                  disableElevation
              ><a href="./Assets/SuratKontrak.pdf" target="_blank" style={{textDecoration:'none', color:'#ffff'}}> Lihat File </a></Button>

              <Button
                   variant="contained" 
                   startIcon={<DescriptionIcon />} 
                   color="primary" style={{ width: '17rem', padding: '1rem', marginLeft:'6rem', height: '5rem', fontSize: 15, backgroundColor: '#81BADB', marginTop:'10px'}} 
                  disableElevation
              ><a href="./Assets/SuratKontrak.pdf" target="_blank" style={{textDecoration:'none', color:'#ffff'}}> Lihat contoh surat perjanjian kontrak </a></Button>
              
          </Grid>
      </Grid>
      </form>
      </div>




      <Button  onClick={sweetAlertclick} type ="submit" variant="contained" startIcon={<SaveIcon />} color="primary" style={{ marginLeft: '25rem', marginTop: '20px', width: '20rem', height: 45, fontSize: 22, backgroundColor: '#22689F'}} 
      disabled={!formik.isDirty && !formik.isValid}  >Simpan</Button>



          </div>
        )
        }
      }

      </Formik>
)
}




export default BiodataDiri;
