# `hospital_executive_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_executive_detail_id | int(11) | NO | PRI | 0 |  |  |
| hospital_profile_id | int(11) | YES |  | NULL |  |  |
| hospital_executive_name | varchar(250) | YES |  | NULL |  |  |
| hospital_executive_phone | varchar(50) | YES |  | NULL |  |  |
| hospital_executive_position_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_executive_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
