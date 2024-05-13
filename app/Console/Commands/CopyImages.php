<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use File;

class CopyImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:copy';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy images from resources/assets/images to public/images';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //log the start of the command
        $sourceDir = public_path('build/images'); // Đường dẫn của thư mục nguồn
        $destinationDir = resource_path('assets/images'); // Đường dẫn của thư mục đích
        //log the start of the command

        // Kiểm tra xem thư mục nguồn tồn tại không
        if (!File::exists($sourceDir)) {
            $this->warn('Source directory does not exist.');
            // create the directory
            File::makeDirectory($sourceDir, 0755, true);

            if (File::exists($sourceDir)) {
                $this->info('Source directory created successfully.');
            } else {
                $this->error('Failed to create source directory.');
            }
        }

        // Kiểm tra xem thư mục đích đã tồn tại không, nếu không thì tạo mới
        if (!File::exists($destinationDir)) {
            $this->error('Destination directory does not exist.');
            return;
        }

        // Lấy danh sách các tập tin trong thư mục nguồn
        $files = File::allFiles($destinationDir);

        // Sao chép từng tập tin
        foreach ($files as $file) {
            $filename = $file->getRelativePathname();
            $source = $destinationDir . '/' . $filename;
            $destination = $sourceDir . '/' . $filename;
            File::copy($source, $destination);
            $this->info('Copied: ' . $filename);
        }

        $this->info('Images copied successfully!');
    }
}
