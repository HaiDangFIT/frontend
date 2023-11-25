import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinics } from "../../app/slice/clinicSlice";
import { AppDispatch, RootState } from "../../app/store/store";

export default function ClinicList() {
    const dispatch: AppDispatch = useDispatch();
    const { clinics, loading, error } = useSelector((state: RootState) => state.clinic);
    
    useEffect(() => {
        dispatch(fetchClinics());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(clinics)) {
        return <div>No doctors available</div>;
    }

    return (
        <div>
            <ul>
                {clinics.map((clinic) => (
                <li key={clinic._id}>
                    {clinic.address.district} - {clinic.name}
                </li>
                ))}
            </ul>
        </div>
    );
}