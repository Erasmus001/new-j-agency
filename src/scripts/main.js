const getTestimonials = async () => {
  const data = await fetch('/src/scripts/data.json');
  const res = await data.json();

  console.log('====================================');
  console.log(res[0].Testimonials);
  console.log('====================================');
}

getTestimonials()