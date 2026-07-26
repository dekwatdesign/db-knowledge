# `eprescription_nhso`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eprescription_nhso_id | int(11) | NO | PRI | 0 |  |  |
| eprescription_organization_code | varchar(10) | YES |  | NULL |  |  |
| eprescription_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | eprescription_id | no | 1 |
| ix_org_id | eprescription_id | yes | 1 |
| ix_org_id | eprescription_organization_code | yes | 2 |
| PRIMARY | eprescription_nhso_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
