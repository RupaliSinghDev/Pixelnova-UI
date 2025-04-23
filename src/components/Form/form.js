// components/form.js

export function createForm({ fields = [], onSubmit }) {
    const form = document.createElement('form');
    form.className = "form";
  
    fields.forEach(field => {
      const wrapper = document.createElement('div');
      wrapper.className = "form-group";
  
      const label = document.createElement('label');
      label.textContent = field.label;
      label.htmlFor = field.name;
  
      let input;
  
      if (field.type === 'select') {
        input = document.createElement('select');
        field.options.forEach(option => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option;
          input.appendChild(opt);
        });
      } else {
        input = document.createElement('input');
        input.type = field.type;
      }
  
      input.name = field.name;
      input.id = field.name;
      input.required = field.required || false;
      input.placeholder = field.placeholder || '';
  
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      form.appendChild(wrapper);
    });
  
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    submitBtn.className = "form-submit";
    form.appendChild(submitBtn);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {};
      fields.forEach(f => {
        formData[f.name] = form.elements[f.name].value;
      });
      onSubmit(formData);
    });
  
    return form;
  }
  