import { Input } from '@heroui/react';
import { UploadIcon } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';

type Props = {
    label?: string;
    description?: string;
    fileTypes: string;
    isInvalid: boolean;
    errorMessage: string;
    onFileChange: () => void;
};

export const FileInput = ({ label, description, fileTypes, errorMessage, isInvalid, onFileChange }: Props) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUploadClick = () => {
        fileInputRef.current?.click();
    };

    const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageFile(file);
            onFileChange(file);
        }
    };

    return (
        <>
            <p className={'pb-2 pr-2 text-small text-foreground ' + (isInvalid ? '!text-danger' : '')}>{label}</p>
            <div
                className={
                    'flex min-h-10 cursor-pointer items-center justify-between overflow-hidden rounded-medium bg-default-100 px-3 text-foreground-500 shadow-sm hover:bg-default-200 focus:outline-blue-500 ' +
                    (isInvalid ? '!bg-danger-50' : '')
                }
                tabIndex="0"
                onClick={handleImageUploadClick}
            >
                <p className={'w-full grow text-small ' + (isInvalid ? '!text-danger' : '')}>
                    {imageFile ? imageFile.name.toString() : 'Choose a file'}
                </p>
                <UploadIcon size={18} className={'mx-2 ' + (isInvalid ? '!text-danger' : '')} />
            </div>
            {isInvalid && <div className="p-1 text-tiny text-danger">{errorMessage}</div>}
            <p className="p-1 text-tiny text-foreground-400">{description}</p>
            <Input
                ref={fileInputRef}
                className="hidden"
                label="Logo"
                type="file"
                description={description}
                accept={fileTypes}
                onChange={updateImage}
                isInvalid={isInvalid}
                errorMessage={errorMessage}
            />
        </>
    );
};
