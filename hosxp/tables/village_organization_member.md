# `village_organization_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_organization_mid | int(11) | NO | PRI | 0 |  |  |
| village_organization_id | int(11) | YES | MUL | NULL |  |  |
| member_date | date | YES |  | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| village_org_member_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id | person_id | no | 1 |
| ix_idx | village_organization_id | no | 1 |
| PRIMARY | village_organization_mid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
