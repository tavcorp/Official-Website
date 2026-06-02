import StartProject from "../models/startProject.model.js";

export const createProjectInquiry = async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      services,
      description,
      timeline,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !company ||
      !email ||
      !services ||
      services.length === 0 ||
      !description ||
      !timeline
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const projectInquiry = await StartProject.create({
      name,
      company,
      email,
      services,
      description,
      timeline,
    });

    return res.status(201).json({
      success: true,
      message: "Project inquiry submitted successfully.",
      data: projectInquiry,
    });
  } catch (error) {
    console.error("Create Project Inquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit project inquiry.",
      error: error.message,
    });
  }
};

// export const getAllProjectInquiries = async (req, res) => {
//   try {
//     const inquiries = await StartProject.find().sort({
//       createdAt: -1,
//     });

//     return res.status(200).json({
//       success: true,
//       count: inquiries.length,
//       data: inquiries,
//     });
//   } catch (error) {
//     console.error("Get Project Inquiries Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch project inquiries.",
//       error: error.message,
//     });
//   }
// };

// export const getProjectInquiryById = async (req, res) => {
//   try {
//     const inquiry = await StartProject.findById(req.params.id);

//     if (!inquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Project inquiry not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: inquiry,
//     });
//   } catch (error) {
//     console.error("Get Project Inquiry Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch project inquiry.",
//       error: error.message,
//     });
//   }
// };

// export const deleteProjectInquiry = async (req, res) => {
//   try {
//     const inquiry = await StartProject.findByIdAndDelete(req.params.id);

//     if (!inquiry) {
//       return res.status(404).json({
//         success: false,
//         message: "Project inquiry not found.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Project inquiry deleted successfully.",
//     });
//   } catch (error) {
//     console.error("Delete Project Inquiry Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete project inquiry.",
//       error: error.message,
//     });
//   }
// };