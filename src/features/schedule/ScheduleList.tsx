import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedules } from "../../app/slice/scheduleSlice";
import { AppDispatch, RootState } from "../../app/store/store";

export default function ScheduleList() {
    const dispatch: AppDispatch = useDispatch();
    const { schedules, loading, error } = useSelector((state: RootState) => state.schedule);
    
    useEffect(() => {
        dispatch(fetchSchedules());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(schedules)) {
        return <div>No doctors available</div>;
    }

    return (
        <div>
            <ul>
                {schedules.map((schedule) => (
                <li key={schedule._id}>
                    {schedule.doctorID._id}
                </li>
                ))}
            </ul>
        </div>
    );
}