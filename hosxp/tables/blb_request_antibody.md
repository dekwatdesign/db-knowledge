# `blb_request_antibody`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_antibody_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_antibody_rt | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_scr_cell | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_37c | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_iat | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_ccc | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_date | date | YES | MUL | NULL |  |  |
| blb_request_antibody_time | time | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_antibody_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_request_antibody_slide | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_result | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_gel | varchar(250) | YES |  | NULL |  |  |
| blb_request_antibody_tube | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_request_antibody_date | blb_request_antibody_date | no | 1 |
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_request_antibody_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
