# `arv_counselling`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arv_counselling_id | int(11) | NO | PRI | 0 |  |  |
| arv_counselling_no | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| arv_counselling_dx | text | YES |  | NULL |  |  |
| arv_counselling_family_name | varchar(255) | YES |  | NULL |  |  |
| arv_counselling_result_date | date | YES |  | NULL |  |  |
| arv_counselling_clinic_id | int(11) | YES | MUL | NULL |  |  |
| arv_counselling_status_id | int(11) | YES | MUL | NULL |  |  |
| login | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_arv_counselling_clinic_id | arv_counselling_clinic_id | no | 1 |
| ix_arv_counselling_status_id | arv_counselling_status_id | no | 1 |
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | arv_counselling_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
