import { useState, useEffect } from 'react';

const useDataFetcher = (url) => {
  const [data, setData] = useState(null);  

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      fetchData();
    }, 5000); 
    
    return () => {
      clearInterval(timerId);
    }
  }, []);

  return data;
};

const useDeleteItem = async (url, id) => {
  const res = await fetch(url, {
    method: 'DELETE',
  });
    
  if(res.ok){
    console.log(id, ' was sucessfully deleted.');
    alert('Successfully deleted.');
  }else {
    console.error('Failed to delete')
  }
}

const AddItem = async (url, items) => {
  const itemContent = items
  console.log(items)

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(itemContent),
    headers: { 'Content-Type': 'application/json', },
  })

  const json = await res.json()

  console.log(items)
  console.log(json)
  
  if (!res.ok) {
    return json
  }

  if (res.ok) {
    return true
  }
}

// Retrieve Function
export const GetOcassions = () => {
  return useDataFetcher('/api/ocassion');
};

export const GetFlowers = () => {
  return useDataFetcher('/api/flower');
};

export const GetProducts = () => {
  return useDataFetcher('/api/product');
};

export const GetCategories = () => {
  return useDataFetcher('/api/category');
};

export const GetOrder = () => {
  return useDataFetcher('/api/order');
};

// Create Function
export const AddCategory = (items) => {
  return AddItem('/api/category', items)
}

export const AddOccassion = (items) => {
  return AddItem('/api/ocassion', items)
}

export const AddFlower= (items) => {
  return AddItem('/api/flower', items)
}

export const AddProduct = (items) => {
  return AddItem('/api/product', items)
}

export const AddOrder = (items) => {
  return AddItem('/api/order', items)
}

// Delete Function
export const DeleteCategory = (id) => {
  return useDeleteItem(`/api/category/${id}`, id);
};

export const DeleteOcassion = (id) => {
  return useDeleteItem(`/api/ocassion/${id}`, id);
};

export const DeleteFlower = (id) => {
  return useDeleteItem(`/api/flower/${id}`, id);
};

export const DeleteProduct = (id) => {
  return useDeleteItem(`/api/product/${id}`, id);
};

export const DeleteOrder = (id) => {
  return useDeleteItem(`/api/order/${id}`, id);
};