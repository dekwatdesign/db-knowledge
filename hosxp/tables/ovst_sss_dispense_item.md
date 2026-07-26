# `ovst_sss_dispense_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sss_dispense_item_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(50) | YES | MUL | NULL |  |  |
| dispense_id | varchar(25) | YES |  | NULL |  |  |
| product_category | varchar(1) | YES |  | NULL |  |  |
| hospital_drug_id | varchar(50) | YES |  | NULL |  |  |
| drug_id | varchar(15) | YES |  | NULL |  |  |
| dfs_code | varchar(100) | YES |  | NULL |  |  |
| dfs_text | varchar(250) | YES |  | NULL |  |  |
| pack_size | varchar(150) | YES |  | NULL |  |  |
| sig_code | varchar(250) | YES |  | NULL |  |  |
| sig_text | varchar(250) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| reimb_price | double(15,3) | YES |  | NULL |  |  |
| product_selection_code | char(1) | YES |  | NULL |  |  |
| refill | char(1) | YES |  | NULL |  |  |
| claim_control | varchar(2) | YES |  | NULL |  |  |
| claim_category | varchar(3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| reimb_amount | double(15,3) | YES |  | NULL |  |  |
| multiple_dispense | varchar(7) | YES |  | NULL |  |  |
| supply_for | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_sss_dispense_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sss_dispense_item_id": 210,
    "vn": "650505134400:355068",
    "dispense_id": "000919499_355068",
    "product_category": "1",
    "hospital_drug_id": "1000138",
    "drug_id": "983939",
    "dfs_code": "",
    "dfs_text": "Pseudoephedrine (Maxiphed) TABLETS 60 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000247:0000000",
    "sig_text": "รับประทาน ครั้งละ   1   เม็ด วันละ 3 เวลา หลังอาหาร เช้า-กลางวัน-เย็น",
    "quantity": 20,
    "unit_price": 1.5,
    "charge_amount": 30.0,
    "reimb_price": 1.5,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{681EA85E-1953-4EE0-B252-13429D9D3A91}",
    "reimb_amount": 30.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 211,
    "vn": "650505134400:355068",
    "dispense_id": "000919499_355068",
    "product_category": "1",
    "hospital_drug_id": "1580001",
    "drug_id": "768341",
    "dfs_code": "",
    "dfs_text": "N-S-S for irrigation 1,000 ml SOLUTIONS 0.9 %",
    "pack_size": "ขวด (1,000 ml.)",
    "sig_code": "0000201:1121764",
    "sig_text": "ใช้ตามแพทย์สั่ง ล้างจมูก เช้า - เย็น",
    "quantity": 1,
    "unit_price": 35.5,
    "charge_amount": 36.0,
    "reimb_price": 35.5,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{8177F0C6-40F7-4F33-BF7F-D3AA5A061628}",
    "reimb_amount": 35.5,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 212,
    "vn": "650505134400:355068",
    "dispense_id": "000919499_355068",
    "product_category": "1",
    "hospital_drug_id": "1000122",
    "drug_id": "276335",
    "dfs_code": "",
    "dfs_text": "Paracetamol TABLETS 500 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000005:0000000",
    "sig_text": "รับประทาน ครั้งละ  1  เม็ด ทุก 4-6 ชั่วโมง เวลาปวดหรือมีไข้",
    "quantity": 20,
    "unit_price": 1.0,
    "charge_amount": 20.0,
    "reimb_price": 1.0,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{8BE803F7-FDD3-4B3E-9C2C-12C140CF5758}",
    "reimb_amount": 20.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 213,
    "vn": "650506085347:355084",
    "dispense_id": "000919933_355084",
    "product_category": "1",
    "hospital_drug_id": "1000159",
    "drug_id": "644649",
    "dfs_code": "",
    "dfs_text": "Depakine ChroNo TABLETS 500 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000011:0000000",
    "sig_text": "รับประทาน ครั้งละ    1     เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "quantity": 45,
    "unit_price": 13.0,
    "charge_amount": 585.0,
    "reimb_price": 13.0,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{0758F7D4-671C-4A5B-8EF6-F82C27FFA6DA}",
    "reimb_amount": 585.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 214,
    "vn": "650506085347:355084",
    "dispense_id": "000919933_355084",
    "product_category": "1",
    "hospital_drug_id": "1000097",
    "drug_id": "779041",
    "dfs_code": "",
    "dfs_text": "Methylphenidate(RITALIN:ริตาลิน) TABLETS 10 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000000:1121774",
    "sig_text": "รับประทานครั้งละ 3 เม็ด หลังอาหารเช้า - เที่ยง",
    "quantity": 354,
    "unit_price": 5.25,
    "charge_amount": 1859.0,
    "reimb_price": 5.25,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{4C8FED49-D922-4160-9A3B-A91A564CEAE9}",
    "reimb_amount": 1858.5,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 215,
    "vn": "650506085347:355084",
    "dispense_id": "000919933_355084",
    "product_category": "1",
    "hospital_drug_id": "1000143",
    "drug_id": "737238",
    "dfs_code": "",
    "dfs_text": "Risperidone GPO(ริสเพอริโดน) TABLETS 1 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000139:0000000",
    "sig_text": "รับประทานครั้งละ  ครึ่ง เม็ด หลังอาหารเช้า และ 1 เม็ด ก่อนนอน",
    "quantity": 80,
    "unit_price": 2.75,
    "charge_amount": 220.0,
    "reimb_price": 2.75,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{878489D8-A6A4-4BEA-B2FD-F98639E230FB}",
    "reimb_amount": 220.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 216,
    "vn": "650506085529:355083",
    "dispense_id": "000919934_355083",
    "product_category": "1",
    "hospital_drug_id": "1000164",
    "drug_id": "458267",
    "dfs_code": "",
    "dfs_text": "Melleril (Thioridazine) TABLETS 50 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000019:0000000",
    "sig_text": "รับประทาน ครั้งละ   1    เม็ด ก่อนนอน",
    "quantity": 30,
    "unit_price": 2.0,
    "charge_amount": 60.0,
    "reimb_price": 2.0,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{106D56E3-F8CA-4122-8EF5-0076C4BE6685}",
    "reimb_amount": 60.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sss_dispense_item_id": 217,
    "vn": "650506085529:355083",
    "dispense_id": "000919934_355083",
    "product_category": "1",
    "hospital_drug_id": "1000163",
    "drug_id": "428130",
    "dfs_code": "",
    "dfs_text": "Melleril 25 mg(Thioridazine) tablet 25 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000011:0000000",
    "sig_text": "รับประทาน ครั้งละ    1     เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "quantity": 30,
    "unit_price": 1.5,
    "charge_amount": 45.0,
    "reimb_price": 1.5,
    "product_selection_code": "",
    "refill": null,
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{29CC3860-0692-4BC1-BEB4-BD65F8D81F89}",
    "reimb_amount": 45.0,
    "multiple_dispense": null,
    "supply_for": null
  }
]
```
