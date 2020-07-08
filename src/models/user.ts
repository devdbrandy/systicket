import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
	username: string;
	messages: any[];
}

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		messages: [{ type: mongoose.Schema.Types.ObjectId }],
	},
	{ timestamps: true, versionKey: false }
);

userSchema.statics.findByLogin = async function findByLogin(login: string) {
	let user = await this.findOne({ username: login });

	if (!user) {
		user = await this.findOne({ email: login });
	}

	return user;
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
