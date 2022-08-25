import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const Form = ({ close, products, totalPrice, clearCart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["cart"] = products;
    data["totalPrice"] = totalPrice;
    console.log(data);
    clearCart();
    close();
  };

  return (
    <form
      style={{
        width: "80%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        margin: "auto",
        backgroundColor: "#e5e5e5",
        color: "#14213d",
        fontSize: "17px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label style={{ paddingBottom: "20px" }}>
        First name:
        <input
          style={{ width: "100%", height: "25px", border: "2px solid #14213d" }}
          type="text"
          {...register("firstname", { required: true })}
        />
        {errors.firstname && <span>First name is a required!</span>}
      </label>

      <label style={{ paddingBottom: "20px" }}>
        Last name:
        <input
          style={{ width: "100%", height: "25px", border: "2px solid #14213d" }}
          type="text"
          {...register("lastname", { required: true })}
        />
        {errors.lastname && <span>Last name is a required!</span>}
      </label>

      <label style={{ paddingBottom: "10px" }}>
        Mobile phone:
        <input
          style={{ width: "100%", height: "25px", border: "2px solid #14213d" }}
          type="tel"
          {...register("mobile", { required: true })}
        />
        {errors.mobile && <span>Mobile is a required!</span>}
      </label>

      <label style={{ paddingBottom: "10px" }}>
        Your country:
        <select
          style={{ width: "100%", height: "25px", border: "2px solid #14213d" }}
          {...register("country", { required: true })}
        >
          <option value="">Choose your country</option>
          <option value="Poland">Poland</option>
          <option value="Ukraine">Ukraine</option>
          <option value="England">England</option>
        </select>
        {errors.country && <span>Country is a required!</span>}
      </label>

      <label
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
        }}
      >
        Delivery options:
        <label>
          <input
            type="radio"
            name="deliveryOptions"
            value="Delivery"
            id="delivery"
            {...register("delivery", { required: true })}
          />
          <label htmlFor="delivery">Delivery</label>
        </label>
        <label>
          <input
            type="radio"
            name="deliveryOptions"
            value="Self-delivery"
            id="selfdelivery"
            {...register("delivery", { required: true })}
          />
          <label htmlFor="selfdelivery">Self-delivery</label>
        </label>
        {errors.delivery && <span>Choose your delivery!</span>}
      </label>

      <label style={{ paddingBottom: "10px" }}>
        Your adress:
        <input
          style={{ width: "100%", height: "25px", border: "2px solid #14213d" }}
          type="text"
          {...register("adress", { required: true })}
        />
        {errors.adress && <span>Adress is a required!</span>}
      </label>

      <label style={{ paddingBottom: "20px" }}>
        <input
          type="checkbox"
          placeholder="Subscribe to Newsletter"
          name="Subscribe to Newsletter"
          id="news"
          {...register("news")}
        />
        <label htmlFor="news"> Subscribe to Newsletter</label>
      </label>

      <button
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "120px",
          alignContent: "center",
          color: "#fff",
          backgroundColor: "#14213d",
          textDecoration: "none",
          cursor: "pointer",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.string,
  clearCart: PropTypes.func,
  close: PropTypes.func,
};

export default Form;
