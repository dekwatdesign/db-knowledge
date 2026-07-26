# `dw_refer_person_refer_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_vital_sign_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_id | int(11) | YES | MUL | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| bps | double(15,3) | YES |  | NULL |  |  |
| bpd | double(15,3) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| hpi | text | YES |  | NULL |  |  |
| ros | text | YES |  | NULL |  |  |
| advice | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_id | person_refer_id | no | 1 |
| PRIMARY | person_refer_vital_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
