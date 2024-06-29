
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { imgSrc, blockId } = req.query;

    if (!imgSrc || !blockId) {
        return res.status(400).json({ error: 'Missing image source or block ID' });
    }

    const imagePath = path.resolve(`./public/images/${blockId}.png`);

    // 이미지가 이미 존재하는지 확인
    if (fs.existsSync(imagePath)) {
        return res.status(200).json({ message: 'Image already exists' });
    }

    try {
        const response = await fetch(imgSrc);
        if (!response.ok) throw new Error('Failed to fetch image');

        const buffer = await response.buffer();
        fs.writeFileSync(imagePath, buffer);

        res.status(200).json({ message: 'Image downloaded and saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to download and save image', details: error.message });
    }
}
