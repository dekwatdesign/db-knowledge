# `ovst_sss_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sss_dx_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| service_class | varchar(2) | YES |  | NULL |  |  |
| service_id | varchar(15) | YES |  | NULL |  |  |
| service_level | int(11) | YES |  | NULL |  |  |
| code_set | varchar(2) | YES |  | NULL |  |  |
| dx_code | varchar(15) | YES |  | NULL |  |  |
| dx_description | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_sss_dx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sss_dx_id": 269,
    "vn": "650311130517",
    "service_class": "EC",
    "service_id": "650311130517",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "F840",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 207,
    "vn": "650223060126",
    "service_class": "EC",
    "service_id": "650223060126",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 208,
    "vn": "650223060137",
    "service_class": "EC",
    "service_id": "650223060137",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 209,
    "vn": "650223060138",
    "service_class": "EC",
    "service_id": "650223060138",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 210,
    "vn": "650223060141",
    "service_class": "EC",
    "service_id": "650223060141",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 211,
    "vn": "650223060142",
    "service_class": "EC",
    "service_id": "650223060142",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 212,
    "vn": "650223060145",
    "service_class": "EC",
    "service_id": "650223060145",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  },
  {
    "ovst_sss_dx_id": 213,
    "vn": "650223060146",
    "service_class": "EC",
    "service_id": "650223060146",
    "service_level": 1,
    "code_set": "IT",
    "dx_code": "Z115",
    "dx_description": null
  }
]
```
