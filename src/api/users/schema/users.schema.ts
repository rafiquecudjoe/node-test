
import { modelOptions, mongoose, prop } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

@modelOptions({ schemaOptions: { collection: 'Users' } })
export class User extends TimeStamps {

    @prop()
    userId: mongoose.Types.ObjectId;
    
    @prop()
    name: string;

    @prop({ unique: true })
    email: string;

    @prop({ type: () => Date })
    createdAt: Date;

    @prop({ type: () => Date })
    updatedAt: Date;

}