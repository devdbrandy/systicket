import mongoose, { Document, Schema } from 'mongoose';

import { IUser } from './user';

export interface IMessage extends Document {
	text: string;
	user: IUser['_id'];
}

const messageSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true, versionKey: false }
);

// pre-hooks
messageSchema.pre('remove', function destroyMessages(next) {
	this.model('Message').deleteMany({ user: this._id }, next);
});

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;
