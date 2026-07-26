# `clinic_awareness_media`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_awareness_media_id | int(11) | NO | PRI | 0 |  |  |
| clinic_awareness_media_name | varchar(200) | YES | MUL | NULL |  |  |
| clinic_awareness_type_id | int(11) | YES |  | NULL |  |  |
| media_url | varchar(250) | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| published | char(1) | YES |  | NULL |  |  |
| reached_count | int(11) | YES |  | NULL |  |  |
| clinic | varchar(3) | YES | MUL | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| media_text | longblob | YES |  | NULL |  |  |
| media_text_html | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_clinic_awareness_media_name | clinic_awareness_media_name | no | 1 |
| PRIMARY | clinic_awareness_media_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
