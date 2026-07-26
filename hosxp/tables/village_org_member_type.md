# `village_org_member_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_org_member_type_id | int(11) | NO | PRI | 0 |  |  |
| village_org_member_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_village_org_member_type_name | village_org_member_type_name | yes | 1 |
| PRIMARY | village_org_member_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "village_org_member_type_id": 1,
    "village_org_member_type_name": "อสม."
  },
  {
    "village_org_member_type_id": 2,
    "village_org_member_type_name": "อสส."
  }
]
```
