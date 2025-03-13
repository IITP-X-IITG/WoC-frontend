import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register/register.css';
import { useAuthStore } from '../store/authStore';

export default function ChangePasswordForm() {
    const { user } = useAuthStore((state) => state);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form);
        const final = {};
        for (const p of formdata) {
            final[p[0]] = p[1];
        }
        console.log(final); // TODO get user email from authstore...
        // return
        if(final.new_password !== final.confirm_new_password){
            alert("Passwords do not match");
            return;
        }
        fetch("/api/password/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": user?.email || "",
                "oldPassword": final.old_password,
                "newPassword": final.new_password,
                "type": user?.type || ""
            })
        }).then(async resp => {
            if (resp.ok) {
                alert("Password updated successfully");
                return resp.json();
            } else throw resp;
        }).then(data => {
            console.log(data)
            // navigate(isstudent?'/studentProfile':'/mentorProfile');
        }).catch(async resp => {
            let data = await resp.json();
            if ("message" in data) {
                alert(data.message);
            }else if (typeof data.error == "string") {
                alert(data.error);
            } else {
                alert(data.error[0].msg);
            }
        })
    };

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                

                <div className="input-field">
                    <label>Old Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your old password"
                        name="old_password"
                        required
                    />
                </div>
                <div className="input-field">
                    <label>New Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your new password"
                        name="new_password"
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Confirm New Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm your new password"
                        name="confirm_new_password"
                        required
                    />
                </div>

                <div className="button-container">
                    
                    <button type="submit" className="btn btn-primary login-btn">
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}
