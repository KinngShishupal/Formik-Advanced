// this converts the incoming data into json with three fields
const getJsonData = (data) => {
  const List = data[0]?.students?.map((student) => {
    return {
      id: student.student_id,
      name: student.student_name,
      present: false,
    };
  });

  return List;
};

export default getJsonData;
