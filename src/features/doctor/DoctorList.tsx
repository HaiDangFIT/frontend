import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorCount, fetchDoctors } from "../../app/slice/doctorSlice";
import { AppDispatch, RootState } from "../../app/store/store";
import { Grid } from "@mui/material";
import DoctorCard from "./DoctorCard";

export default function DoctorList() {
    const dispatch: AppDispatch = useDispatch();
    const { doctors, loading, error } = useSelector((state: RootState) => state.doctor);
    
    useEffect(() => {
        dispatch(fetchDoctors());
        dispatch(fetchDoctorCount());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(doctors)) {
        return <div>No doctors available</div>;
    }

    return (
        <Grid container style={{ marginTop: '50px' }}>
            <Grid container item xs={3}>
                
            </Grid>
            <Grid container item spacing={2} xs={9}>
                {doctors.map(doctor => (
                    <Grid key={doctor._id._id} item xs={4}>
                        <DoctorCard doctor={doctor}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        
    );
}