# `psychiatric_clinic_socialwelfare_resource_social`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_socialwelfare_resource_social_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_socialwelfare_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_resource_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_socialwelfare_resource_social_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
