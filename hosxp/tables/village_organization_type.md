# `village_organization_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_organization_type_id | int(11) | NO | PRI | 0 |  |  |
| village_organization_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_organization_type_name | village_organization_type_name | yes | 1 |
| PRIMARY | village_organization_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "village_organization_type_id": 1,
    "village_organization_type_name": "อสม.",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 2,
    "village_organization_type_name": "ผดบ. ที่ผ่านการอบรม",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 3,
    "village_organization_type_name": "หมอตำแย",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 4,
    "village_organization_type_name": "อบต.",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 5,
    "village_organization_type_name": "แพทย์แผนโบราณ",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 6,
    "village_organization_type_name": "อาสาสมัครเอดส์",
    "hos_guid": null
  },
  {
    "village_organization_type_id": 7,
    "village_organization_type_name": "คณะกรรมการหมู่บ้าน",
    "hos_guid": null
  }
]
```
