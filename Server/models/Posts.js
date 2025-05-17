// 
const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  // adds createdAt and updatedAt fields
  }
);
