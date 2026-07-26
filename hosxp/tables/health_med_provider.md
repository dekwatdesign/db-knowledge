# `health_med_provider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_provider_id | int(11) | NO | PRI | 0 |  |  |
| health_med_provider_pname | varchar(30) | YES |  | NULL |  |  |
| health_med_provider_lname | varchar(50) | YES |  | NULL |  |  |
| health_med_provider_license_no | varchar(50) | YES |  | NULL |  |  |
| health_med_curriculum_id | int(11) | YES |  | NULL |  |  |
| health_med_educational_id | int(11) | YES |  | NULL |  |  |
| health_med_institute_type_id | int(11) | YES |  | NULL |  |  |
| health_med_institute_id | int(11) | YES |  | NULL |  |  |
| health_med_license_type_id | int(11) | YES |  | NULL |  |  |
| health_med_provider_type_id | int(11) | YES |  | NULL |  |  |
| health_med_provider_category_id | int(11) | YES |  | NULL |  |  |
| health_med_provider_fname | varchar(50) | YES |  | NULL |  |  |
| health_med_provider_full_name | varchar(100) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_provider_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
