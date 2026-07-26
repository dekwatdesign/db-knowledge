# `vehicle_car_upload`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PDF_FILEID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| PDF_FILENAME | varchar(255) | YES |  | NULL |  |  |
| file_pdf | varchar(255) | YES |  | NULL |  |  |
| file_img | blob | YES |  | NULL |  |  |
| PDF_FILE_STATUS | enum('True','False') | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PDF_FILEID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
