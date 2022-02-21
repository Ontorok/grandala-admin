import React, { useEffect, useMemo, useState } from 'react';
import Rechart from '../../components/chart/Rechart';
import { userRequest } from '../../services/config';

const Chart = function () {
  const [userStats, setUserStats] = useState([]);
  const MONTH = useMemo(
    () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    []
  );

  useEffect(() => {
    const fetchUserState = async () => {
      try {
        const res = await userRequest.get('/user/stat');
        const data = res.data.data.map((item) => ({
          name: MONTH[item._id - 1],
          'Active User': item.total
        }));
        setUserStats(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserState();
  }, [MONTH]);

  return <Rechart title="User Anylytics" data={userStats} dataKey="Active User" showGrid />;
};

export default Chart;
