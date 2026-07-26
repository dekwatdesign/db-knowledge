# `ovst_sks_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sks_dx_id | int(11) | NO | PRI | 0 |  |  |
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
| PRIMARY | ovst_sks_dx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sks_dx_id": 78520,
    "vn": "610702082940",
    "service_class": "EC",
    "service_id": "610702082940",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "Z620",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78519,
    "vn": "610702082940",
    "service_class": "EC",
    "service_id": "610702082940",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F840",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78521,
    "vn": "610702083014",
    "service_class": "EC",
    "service_id": "610702083014",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F840",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78523,
    "vn": "610702083024",
    "service_class": "EC",
    "service_id": "610702083024",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "Z620",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78522,
    "vn": "610702083024",
    "service_class": "EC",
    "service_id": "610702083024",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F840",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78525,
    "vn": "610702083044",
    "service_class": "EC",
    "service_id": "610702083044",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F900",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78524,
    "vn": "610702083044",
    "service_class": "EC",
    "service_id": "610702083044",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F840",
    "dx_description": null
  },
  {
    "ovst_sks_dx_id": 78526,
    "vn": "610702090036",
    "service_class": "EC",
    "service_id": "610702090036",
    "service_level": null,
    "code_set": "IT",
    "dx_code": "F900",
    "dx_description": null
  }
]
```
