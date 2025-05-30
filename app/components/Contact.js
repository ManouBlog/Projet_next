import styles from '../../styles/Home.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3 className='font-bold text-2xl'>Contact</h3>
     <p className='my-3'>
  <a href="https://www.google.com/maps/search/?api=1&query=Abidjan,Yopougon" target="_blank" rel="noopener noreferrer">
    Abidjan, Yopougon
  </a>
</p>
<p className='my-3'>
  <a href="tel:+2250545749741">
    +225 05-45-74-97-41
  </a>
</p>
<p className='my-3'>
  <a href="mailto:adjobikadjopierre27@gmail.com">
    adjobikadjopierre27@gmail.com
  </a>
</p>
<p className='my-3'>
     <a href="https://github.com/ManouBlog">
    https://github.com/ManouBlog
  </a>
    
</p>
<p className='my-3'>
     <a href="https://www.linkedin.com/in/adjobi-kadjo
pierre-emmanuel/ ">
    https://www.linkedin.com/in/adjobi-kadjo
pierre-emmanuel/ 
  </a>
    
</p>


      {/* <p>www.example.com</p> */}
    </div>
  );
};

export default Contact;
