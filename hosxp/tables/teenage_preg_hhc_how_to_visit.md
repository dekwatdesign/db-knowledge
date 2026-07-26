# `teenage_preg_hhc_how_to_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_how_to_visit_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_how_to_visit_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_how_to_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "teenage_preg_hhc_how_to_visit_id": 1,
    "teenage_preg_hhc_how_to_visit_name": "เยี่ยมทางโทรศัพท์",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_how_to_visit_id": 2,
    "teenage_preg_hhc_how_to_visit_name": "เยี่ยมบ้าน",
    "hos_guid": null
  }
]
```
