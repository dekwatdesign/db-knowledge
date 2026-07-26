# `s_drugitems`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| strength | varchar(50) | YES |  | NULL |  |  |
| units | varchar(50) | YES |  | NULL |  |  |
| dosageform | varchar(100) | YES |  | NULL |  |  |
| drugnote | varchar(150) | YES |  | NULL |  |  |
| use_right | char(1) | YES |  | NULL |  |  |
| must_paid | char(1) | YES |  | NULL |  |  |
| istatus | char(1) | YES | MUL | NULL |  |  |
| access_level | int(11) | YES | MUL | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| displaycolor | int(11) | YES |  | NULL |  |  |
| price_lock | char(1) | YES |  | NULL |  |  |
| icode_guid | varchar(38) | YES | MUL | NULL |  |  |
| ename | varchar(150) | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| is_medication | char(1) | YES | MUL | NULL |  |  |
| use_paidst | char(1) | YES |  | NULL |  |  |
| is_medsupply | char(1) | YES |  | NULL |  |  |
| sub_income | varchar(3) | YES |  | NULL |  |  |
| oldcode | varchar(15) | YES |  | NULL |  |  |
| displaycolor_focus | int(11) | YES |  | NULL |  |  |
| highcost | varchar(1) | YES |  | N |  |  |
| billcode | varchar(10) | YES |  | NULL |  |  |
| billnumber | varchar(15) | YES |  | NULL |  |  |
| nhso_adp_type_id | int(11) | YES |  | NULL |  |  |
| nhso_adp_code | varchar(15) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| tpu_code_list | varchar(200) | YES |  | NULL |  |  |
| sks_drug_code | varchar(25) | YES |  | NULL |  |  |
| drugaccount | varchar(2) | YES |  | NULL |  |  |
| sks_product_category_id | int(11) | YES |  | NULL |  |  |
| icd9cm | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_access | access_level | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icode_guid | icode_guid | no | 1 |
| ix_name | name | no | 1 |
| ix_nsu | name | no | 1 |
| ix_nsu | strength | no | 2 |
| ix_nsu | units | no | 3 |
| ix_search1 | is_medication | no | 1 |
| ix_search1 | istatus | no | 2 |
| ix_search1 | name | no | 3 |
| ix_search1 | icode | no | 4 |
| ix_search1_index | icode | no | 1 |
| ix_search1_index | is_medication | no | 2 |
| ix_search1_index | istatus | no | 3 |
| ix_search1_index | name | no | 4 |
| ix_status | istatus | no | 1 |
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "1000001",
    "name": "Ultracarbon X",
    "strength": "250 mg",
    "units": "เม็ด",
    "dosageform": "tablet",
    "drugnote": "",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 536870912,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Ultracarbon X 250 mg เม็ด",
    "cost": 3.85,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 5.0,
    "tpu_code_list": null,
    "sks_drug_code": "685664",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000002",
    "name": "Adrenaline Injection (HAD)",
    "strength": "1 mg/ml",
    "units": "แอมพูล",
    "dosageform": "INJECTIONS",
    "drugnote": "",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "Y",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 255,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Adrenaline Injection (HAD) 1 mg/ml แอมพูล",
    "cost": 6.0,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 12.75,
    "tpu_code_list": null,
    "sks_drug_code": "537227",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000003",
    "name": "Tetavax Injection",
    "strength": "0.5",
    "units": "แอมพูล",
    "dosageform": "injection",
    "drugnote": "",
    "use_right": "N",
    "must_paid": "N",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 536870912,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Tetavax Injection 0.5 แอมพูล",
    "cost": 58.85,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": null,
    "nhso_adp_code": "",
    "unitprice": 71.5,
    "tpu_code_list": null,
    "sks_drug_code": "",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000004",
    "name": "ALPRAzolam (Xanax)",
    "strength": "0.25 mg",
    "units": "เม็ด",
    "dosageform": "TABLETS",
    "drugnote": "",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 16711680,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "ALPRAzolam (Xanax) 0.25 mg เม็ด",
    "cost": 0.6,
    "income": "17",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 1.5,
    "tpu_code_list": null,
    "sks_drug_code": "379070",
    "drugaccount": "",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000005",
    "name": "ALPRAzolam (Xanax)",
    "strength": "0.5 mg",
    "units": "เม็ด",
    "dosageform": "TABLETS",
    "drugnote": "",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 16711680,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Alprazolam",
    "cost": 0.65,
    "income": "17",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 1.5,
    "tpu_code_list": null,
    "sks_drug_code": "479074",
    "drugaccount": "",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000006",
    "name": "Alumina-magnesia tab.",
    "strength": "mg.",
    "units": "เม็ด",
    "dosageform": "tablet",
    "drugnote": "Antacid",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 536870912,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Alumina-magnesia tab. mg. เม็ด",
    "cost": 0.27,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": null,
    "nhso_adp_code": "",
    "unitprice": 0.75,
    "tpu_code_list": null,
    "sks_drug_code": "643072",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000007",
    "name": "Alumina-magnesia susp(ASIALUM)",
    "strength": "% W/V",
    "units": "ขวด (240 ml.)",
    "dosageform": "SUSPENSIONS",
    "drugnote": "Alum milk",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "N",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 536870912,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Alumina-magnesia susp(ASIALUM) % W/V ขวด (240 ml.)",
    "cost": 20.0,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 25.0,
    "tpu_code_list": null,
    "sks_drug_code": "770365",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  },
  {
    "icode": "1000008",
    "name": "Amitriptyline",
    "strength": "10 mg",
    "units": "เม็ด",
    "dosageform": "TABLETS",
    "drugnote": "A10",
    "use_right": "N",
    "must_paid": "Y",
    "istatus": "Y",
    "access_level": 0,
    "paidst": "01",
    "displaycolor": 536870912,
    "price_lock": "N",
    "icode_guid": null,
    "ename": "Amitriptyline 10 mg เม็ด",
    "cost": 0.33,
    "income": "03",
    "hos_guid": null,
    "hos_guid_ext": null,
    "is_medication": "Y",
    "use_paidst": "",
    "is_medsupply": "N",
    "sub_income": "",
    "oldcode": "",
    "displaycolor_focus": 0,
    "highcost": "N",
    "billcode": "",
    "billnumber": "",
    "nhso_adp_type_id": 8,
    "nhso_adp_code": "",
    "unitprice": 1.0,
    "tpu_code_list": null,
    "sks_drug_code": "736949",
    "drugaccount": "ก",
    "sks_product_category_id": 1,
    "icd9cm": null
  }
]
```
