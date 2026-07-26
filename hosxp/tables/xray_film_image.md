# `xray_film_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_film_image_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| film_image | longblob | YES |  | NULL |  |  |
| film_image_note | text | YES |  | NULL |  |  |
| original_filename | varchar(200) | YES | MUL | NULL |  |  |
| file_extension | varchar(10) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| ai_status | char(1) | YES | MUL | NULL |  |  |
| ai_upload_datetime | datetime | YES |  | NULL |  |  |
| ai_reply_datetime | datetime | YES |  | NULL |  |  |
| ai_result | text | YES |  | NULL |  |  |
| ai_result_image | longblob | YES |  | NULL |  |  |
| ai_request_id | varchar(100) | YES |  | NULL |  |  |
| film_image_size | int(11) | YES |  | NULL |  |  |
| ai_response_1 | text | YES |  | NULL |  |  |
| ai_response_2 | text | YES |  | NULL |  |  |
| ai_film_cardiothoracic_ratio | longblob | YES |  | NULL |  |  |
| ai_film_heatmap | longblob | YES |  | NULL |  |  |
| ai_overall_result | varchar(100) | YES |  | NULL |  |  |
| ai_text_report | text | YES |  | NULL |  |  |
| dicom_tag | blob | YES |  | NULL |  |  |
| xray_items_code | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_c | xray_items_code | no | 1 |
| ix_xn | xn | no | 1 |
| ix_xn_ai_status | ai_status | no | 1 |
| ix_xn_ai_status | xn | no | 2 |
| ix_xn_filename | original_filename | no | 1 |
| ix_xn_filename | xn | no | 2 |
| PRIMARY | xray_film_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
