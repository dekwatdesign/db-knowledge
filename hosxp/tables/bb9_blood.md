# `bb9_blood`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_id | varchar(25) | NO | PRI |  |  |  |
| bloodtype_id | int(11) | YES | MUL | NULL |  |  |
| bloodgroup_id | int(11) | YES | MUL | NULL |  |  |
| bloodhow_id | int(11) | YES | MUL | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| weight | int(11) | YES |  | NULL |  |  |
| available | char(1) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| register_time | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bloodgroup_id | bloodgroup_id | no | 1 |
| bloodhow_id | bloodhow_id | no | 1 |
| bloodtype_id | bloodtype_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | blood_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
