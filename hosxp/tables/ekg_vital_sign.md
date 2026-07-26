# `ekg_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_vital_sign_id | int(11) | NO | PRI | 0 |  |  |
| ekg_request_id | int(11) | YES | MUL | NULL |  |  |
| ekg_vital_sign_datetime | datetime | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ekg_request_id | ekg_request_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ekg_vital_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
