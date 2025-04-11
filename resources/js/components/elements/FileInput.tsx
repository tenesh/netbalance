import { Input } from '@heroui/react';
import { Upload } from 'lucide-react';
import { useRef } from 'react';

type Props = {
    label?: string;
    onFileChange: () => void;
};

export const FileInput = ({ label = 'Choose file', onFileChange }: Props) => {
    const ref = useRef(null);

    return (
        <>
            <div
                className="flex h-14 min-h-10 cursor-pointer items-center justify-between overflow-hidden rounded-medium bg-default-100 px-3 text-foreground-600 shadow-sm hover:bg-default-200 focus:outline-blue-500"
                tabIndex="0"
            >
                <p className="w-full grow text-small text-foreground-500">{label}</p>
                <Upload size={18} className="mx-2" />
            </div>
            <p className="p-1 text-tiny text-foreground-400">Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</p>
            <Input
                className="hidden"
                label="Logo"
                type="file"
                description="Helo"
                // value={data.slug}
                // onValueChange={(value) => {
                //     clearErrors('slug');
                //     setData('slug', value);
                // }}
                // isInvalid={!!errors.slug}
                // errorMessage={errors.slug}
            />
        </>
    );
};
