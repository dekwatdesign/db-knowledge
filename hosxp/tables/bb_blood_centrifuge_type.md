# `bb_blood_centrifuge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_centrifuge_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_centrifuge_code | char(1) | YES |  | NULL |  |  |
| bb_blood_centrifuge_name | varchar(200) | YES |  | NULL |  |  |
| bb_blood_centrifuge_group | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_centrifuge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
