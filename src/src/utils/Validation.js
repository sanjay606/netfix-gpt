export const CheckformValid = (Email,Password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if (!isEmailValid)return "Email ID IS Not Valid ,Try Again";
    if (!isPasswordValid)return "Password IS Not Valid , Try Again";

    return null ;

}