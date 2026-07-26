# `cm_cancer_node_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_node_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_node_type_name | varchar(200) | YES | UNI | NULL |  |  |
| cm_cancer_node_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_node_type_name | cm_cancer_node_type_name | yes | 1 |
| PRIMARY | cm_cancer_node_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cm_cancer_node_type_id": 1,
    "cm_cancer_node_type_name": "ไม่สามารถประเมินต่อมน้ำเหลืองได้",
    "cm_cancer_node_code": "Nx"
  },
  {
    "cm_cancer_node_type_id": 2,
    "cm_cancer_node_type_name": "ไม่พบมะเร็งในต่อมน้ำเหลือง",
    "cm_cancer_node_code": "N0"
  },
  {
    "cm_cancer_node_type_id": 3,
    "cm_cancer_node_type_name": " มะเร็งเข้าไปในต่อมน้ำเหลือง 1",
    "cm_cancer_node_code": "N1"
  },
  {
    "cm_cancer_node_type_id": 4,
    "cm_cancer_node_type_name": " มะเร็งเข้าไปในต่อมน้ำเหลือง 2",
    "cm_cancer_node_code": "N2"
  },
  {
    "cm_cancer_node_type_id": 5,
    "cm_cancer_node_type_name": " มะเร็งเข้าไปในต่อมน้ำเหลือง 3",
    "cm_cancer_node_code": "N3"
  }
]
```
